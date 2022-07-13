import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ExpandMore } from "@mui/icons-material";
import { capitalizeFirstLetter } from "@/utilities";
import Image from "next/image";

// menu should be key value as string or nested menu
type SubMenu = { title: string; description: string; icon: string };
type MenuType = {
	[key: string]: string | SubMenu[];
};

const MenuC = (): JSX.Element => {
	// i am going to create dynamic menu parser to add and remove with convenience
	const navso = {
		features: "خدمات",
		plans: "پکیج ها",
		ambassador: "آمار",
		priceCharts: "نشانی",
		blog: "بلاگ",
		دیگر: [
			{
				title: "تست یک",
				description:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
				icon: "bulb-light",
			},
			{
				title: "تست دو",
				description:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
				icon: "calendar",
			},
			{
				title: "تست سه",
				description:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
				icon: "chart-graph",
			},
			{
				title: "تست چهار",
				description:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
				icon: "chat-message",
			},
			{
				title: "تست پنچ",
				description:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
				icon: "clock",
			},
			{
				title: "تست شش",
				description:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
				icon: "cog-gear",
			},
			{
				title: "تست هفت",
				description:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
				icon: "globe",
			},
			{
				title: "تست هشت",
				description:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
				icon: "laptop",
			},
			{
				title: "تست نه",
				description:
					"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
				icon: "leadership",
			},
		],
	};

	const parseSubMenus = (menu: SubMenu[]) => {
		return menu.map((menu, key) => {
			return (
				<Menu.Item key={key}>
					<div className="flex py-3 px-4 hover:cursor-pointer ">
						<Image
							src={`/images/menu/${menu.icon}.svg`}
							alt={menu.title}
							width={90}
							height={70}
						/>
						<div className="mr-2 hover:bg-blue-accent hover:text-white rounded px-3 py-4">
							<div className="font-bold pb-1">{menu.title}</div>
							<div className="text-sm">{menu.description}</div>
						</div>
					</div>
				</Menu.Item>
			);
		});
	};

	const parseMenus = (menu: MenuType) => {
		return Object.keys(menu).map((key) => {
			if (typeof menu[key] == "string") {
				return (
					<li
						key={key}
						className="hover:cursor-pointer hover:text-blue-accent mx-5"
					>
						{menu[key].toString()}
					</li>
				);
			} else {
				return (
					<Menu as="div" key={key}>
						{/* when defining nested menus we read label from its key and need to capitalize the first letter */}
						<Menu.Button>
							{capitalizeFirstLetter(key)} <ExpandMore />
						</Menu.Button>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="grid grid-cols-3 w-screen absolute z-10 right-0 mt-7 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								{parseSubMenus(menu[key] as SubMenu[])}
							</Menu.Items>
						</Transition>
					</Menu>
				);
			}
		});
	};

	return (
		<menu className="flex">
			<ul className="rtl flex list-none">{parseMenus(navso)}</ul>
		</menu>
	);
};

export default MenuC;
