import { DecorativeLines } from '../DecorativeLines';
import { AvatarGroup } from '../Avatar';
import { getCommunityAvatars } from '@/data/users';
import { WordsPullUp } from '../WordsPullUp';
import { AnimatedButton } from '../AnimatedButton';
import { AnimatedAvatars } from '../AnimatedAvatars';

interface HeroSectionProps {
  onJoinTodayClick: () => void;
}

export function HeroSection({ onJoinTodayClick }: HeroSectionProps) {
  const communityAvatars = getCommunityAvatars();

  return (
    <>
      {/* Profile Images with background lines */}
      <div className="mb-12 mt-12 w-full max-w-xl mx-auto flex justify-center">
        <DecorativeLines edgeAlign={true} verticalExtension={3} elementType="avatars">
          <AnimatedAvatars>
            <AvatarGroup users={communityAvatars} size="lg" overlap={true} priority={true} />
          </AnimatedAvatars>
        </DecorativeLines>
      </div>

      {/* Main Heading with background lines */}
      <div className="w-full max-w-6xl mx-auto mb-8">
        <DecorativeLines edgeAlign={true} verticalExtension={5} elementType="text" textLetterWidthRatio={0.85}>
          <WordsPullUp 
            text="From Idea to App with AI"
            className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold text-black text-center leading-[1.1] tracking-tight"
          />
        </DecorativeLines>
      </div>

      {/* Subheading with brackground lines */}
      <div className="w-full max-w-3xl mx-auto mb-14">
        <DecorativeLines edgeAlign={true} verticalExtension={5} elementType="text" textLetterWidthRatio={0.7} hideVerticalOnMobile={true} leftOffset={-10}>
          <WordsPullUp 
            text="Learn, build, and grow in a community of Builder's"
            className="text-xl md:text-2xl text-[#626262] text-center leading-relaxed font-medium"
          />
        </DecorativeLines>
      </div>

      {/* CTA Button with background lines */}
      <div className="w-full max-w-lg mx-auto mb-20 flex justify-center">
        <DecorativeLines edgeAlign={true} verticalExtension={7} elementType="button">
          <AnimatedButton onClick={onJoinTodayClick}>
            Join Now
          </AnimatedButton>
        </DecorativeLines>
      </div>
    </>
  );
}