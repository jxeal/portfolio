import Image from "next/image";
import Link from "next/link";

export const Fulltime = () => {
  return (
    <div>
      <div className="space-y-2 ">
        <div className="">
          So, for context,{" "}
          <Link
            className="underline hover:text-accent "
            href={"https://nilaycodes.in"}
            target="_blank"
          >
            noobie
          </Link>{" "}
          got a freelance gig. Now, his work, my work lmao. We do the work, it
          gets delayed a little due to a stripe bug, and then get paid. <br />{" "}
          Noobie even grabs himself a full-time offer while we were working on
          this gig. <br />
          (Congrats Sir, you deserved that position)
        </div>
        <div className="flex gap-x-2">
          <div className="flex basis-1/2 pr-2">
            <Image
              src="/blogs/img1.webp"
              height={240}
              width={384}
              alt="First Earning Lmao"
            />
          </div>
          <div className="flex basis-1/2 pl-4">
            <div className="flex items-center">
              First earning party?
              <br />
              (PS:- The Biriyani was GOATED)
            </div>
          </div>
        </div>
        <div>
          Then, pujo comes, and yada yada yada, I start working on something
          else, when they give noobie another freelance gig. Cool right? But his
          boss then asks him to join before the joining date, so now he has too
          much work for himself, and he leaves the side gig (obv). <br />
          Now comes the catch lmao.
        </div>
        <div>
          They contact me, as even I worked on the previous gig. I was free, but
          frankly I didnt want another freelance gig anymore, and it was in
          python. Me no python 😊. Placements had started. I tell that, and
          without missing a beat, he goes - &quot;We can consider full time as
          well&quot;. <br />
          <br />
          What? Full time? No freaking way I get offered a full-time role this
          casually. HOLY SHIT!!!
          <div className="p-1" />
          <Image
            src="/blogs/img2.webp"
            height={480}
            width={700}
            alt="Full Time?"
            className="w-[90%] h-auto"
          />
        </div>
        <div>
          We had a chat about AI, the company, what the short term and long term
          goals were. What my previous experiences were etc etc. Something like
          an HR round.
          <div className="p-2" />
          The salary is less than what I wanted, but a Remote job, with cool
          founders? <br />I choose the latter any day of the week!
        </div>
        <div className="p-2" />
        <div>
          So, I&apos;m no longer unemployed haha! <br /> Cool story. Worthy
          enough to share lmao!
        </div>
      </div>
    </div>
  );
};
