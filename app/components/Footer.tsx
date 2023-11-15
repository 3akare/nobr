//next imports
import Link from "next/link";

function Footer({ visibleFooter }: { visibleFooter: true | false }) {
  return (
    <>
      {visibleFooter && (
        <footer className="p-2 text-xs mt-20">
          <nav className="p-2 container mx-auto flex flex-col sm:flex-row justify-between md:items-center gap-2 text-foreground/80">
            <section>
              <p>
                &copy;2023 <span className="text-pOrange">nobr</span>. All
                rights reserved
              </p>
            </section>
            <section>
              <div className="flex items-center divide-x-[1px] divide-foreground">
                <Link
                  href="/legal#term"
                  className="mr-2 hover:text-foreground"
                  prefetch={true}
                >
                  Terms of service
                </Link>
                <Link
                  href="/legal#privacy"
                  className="px-2 hover:text-foreground"
                >
                  <p>Privacy Policy</p>
                </Link>
                <Link
                  href="/legal#community"
                  className="pl-2 hover:text-foreground"
                >
                  <p>Community Guidelines</p>
                </Link>
              </div>
            </section>
          </nav>
        </footer>
      )}
    </>
  );
}

export default Footer;
