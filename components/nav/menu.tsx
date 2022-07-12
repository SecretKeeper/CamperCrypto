import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ExpandMore } from "@mui/icons-material";
import { capitalizeFirstLetter } from "@/utilities";

// menu should be key value as string or nested menu
type Menu = { [key: string]: string | { [key: string]: string } };

const MenuC = (): JSX.Element => {
	// i am going to create dynamic menu parser to add and remove with convenience
	const navso = {
		features: "Features",
		plans: "Plans",
		ambassador: "Ambassador Program",
		priceCharts: "Price Charts",
		blog: "Blog",
		more: {
			one: "One",
			two: "Two",
			three: "Three",
		},
	};

	const parseSubMenus = (menu: Menu) => {
		return Object.keys(menu).map((key) => {
			return (
				<Menu.Item key={key}>
					<div className="py-3 px-4 hover:cursor-pointer">{menu[key]}</div>
				</Menu.Item>
			);
		});
	};

	const parseMenus = (menu: Menu) => {
		return Object.keys(menu).map((key) => {
			if (typeof menu[key] == "string") {
				return (
					<li
						key={key}
						className="hover:cursor-pointer hover:text-blue-accent mr-5"
					>
						{menu[key]}
					</li>
				);
			} else {
				return (
					<Menu as="div" key={key} className="relative">
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
							<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								{parseSubMenus(menu[key])}
							</Menu.Items>
						</Transition>
					</Menu>
				);
			}
		});
	};

	return (
		<menu className="flex">
			<ul className="flex list-none">{parseMenus(navso)}</ul>
		</menu>
	);
};

export default MenuC;
