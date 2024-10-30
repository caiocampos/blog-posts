import { DatePicker } from 'antd';
import { PickerPropsWithMultiple } from 'antd/es/date-picker/generatePicker/interface';

const CustomDatePicker = (props: PickerPropsWithMultiple) => <DatePicker format="DD/MM/YYYY" {...props} />;

export default CustomDatePicker;
