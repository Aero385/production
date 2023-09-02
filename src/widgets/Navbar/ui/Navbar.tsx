import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>

        <div className={cls.link}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
                Main
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                about
            </AppLink>
        </div>
    </div>
);

export default Navbar;
