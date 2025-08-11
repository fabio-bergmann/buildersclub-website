import { MainButton } from '../MainButton';
import { DecorativeLines } from '../DecorativeLines';
import { AvatarGroup } from '../Avatar';
import { getCommunityAvatars } from '@/data/users';

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
          <div className="h-12 flex items-center">
            <AvatarGroup users={communityAvatars} size="lg" overlap={true} priority={true} />
          </div>
        </DecorativeLines>
      </div>

      {/* Main Heading with background lines */}
      <div className="w-full max-w-6xl mx-auto mb-8">
        <DecorativeLines edgeAlign={true} verticalExtension={5} elementType="text" textLetterWidthRatio={0.85}>
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold text-black text-center leading-[1.1] tracking-tight">
            From Idea to App with AI
          </h1>
        </DecorativeLines>
      </div>

      {/* Subheading with brackground lines */}
      <div className="w-full max-w-3xl mx-auto mb-14">
        <DecorativeLines edgeAlign={true} verticalExtension={5} elementType="text" textLetterWidthRatio={0.7} hideVerticalOnMobile={true}>
          <p className="text-xl md:text-2xl text-[#626262] text-center leading-relaxed font-medium">
            Learn, build, and grow in a community of Builder&apos;s
          </p>
        </DecorativeLines>
      </div>

      {/* CTA Button with background lines */}
      <div className="w-full max-w-lg mx-auto mb-20 flex justify-center">
        <DecorativeLines edgeAlign={true} verticalExtension={7} elementType="button">
          <MainButton onClick={onJoinTodayClick}>
            Join Now
          </MainButton>
        </DecorativeLines>
      </div>
    </>
  );
}