//next imports
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-2 text-xs mt-20">
      <nav className="p-2 container mx-auto flex flex-col sm:flex-row justify-between md:items-center gap-2 text-foreground/80">
        <section>
          <p>
            &copy;2023 <span className="text-pOrange">nobr</span>. All rights
            reserved
          </p>
        </section>
        <section>
          <ul className="flex items-center divide-x-[1px] divide-foreground">
            <Link
              href="/legal"
              className="mr-2 hover:text-foreground"
              prefetch={true}
            >
              Terms of service
            </Link>
            <Link
              href="/legal"
              className="px-2 hover:text-foreground"
              prefetch={true}
            >
              <p>Privacy Policy</p>
            </Link>
            <Link
              href="/legal"
              className="pl-2 hover:text-foreground"
              prefetch={true}
            >
              <p>Community Guidelines</p>
            </Link>
          </ul>
        </section>
      </nav>
    </footer>
  );
}

export default Footer;
