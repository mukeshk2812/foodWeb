public Food getFood(String order) {

		/**
		 * main code starts from here
		 */

		if (order.equalsIgnoreCase("Pizza")) {
			return new Pizza();
		} else if (order.equalsIgnoreCase("Cake")) {
			return new Cake();
		}
		return null;

		/** main code end herer */

	}
