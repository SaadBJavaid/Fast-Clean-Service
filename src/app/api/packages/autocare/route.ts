import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import AutocareServiceService from "../../../../services/autocare-package";
import dbConnect from "../../../../lib/dbConnect";

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const query = req.nextUrl.searchParams;
    const id = query.get("id");

    if (id) {
      const service = await AutocareServiceService.getServiceById(id as string);
      if (!service) {
        return NextResponse.json({ message: "Service not found" });
      }
      return NextResponse.json(service);
    }
    const services = await AutocareServiceService.getAllServices();
    return NextResponse.json(services);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: "Validation error", errors: error.errors });
    }

    console.log(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const service = await AutocareServiceService.createService(await req.json());
    return NextResponse.json(service);
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      return NextResponse.json({ message: "Validation error", errors: error.errors });
    }
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function PUT(req: NextRequest) {
  await dbConnect();

  try {
    const query = req.nextUrl.searchParams;
    const id = query.get("id");

    const service = await AutocareServiceService.updateService(id as string, req.body);
    if (!service) {
      return NextResponse.json({ message: "Service not found" });
    }
    return NextResponse.json(service);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: "Validation error", errors: error.errors });
    }
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function PATCH(req: NextRequest) {
  await dbConnect();

  try {
    const query = req.nextUrl.searchParams;
    const id = query.get("id");

    const service = await AutocareServiceService.updatePartialService(id as string, req.body);
    if (!service) {
      return NextResponse.json({ message: "Service not found" });
    }
    return NextResponse.json(service);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: "Validation error", errors: error.errors });
    }
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function DELETE(req: NextRequest) {
  await dbConnect();

  try {
    const query = req.nextUrl.searchParams;
    const id = query.get("id");

    const service = await AutocareServiceService.deleteService(id as string);
    if (!service) {
      return NextResponse.json({ message: "Service not found" });
    }
    return NextResponse.json({ message: "Service deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" });
  }
}
