export default {
	mask: '1010000----------010-----1010011',
	args: {
		rs2: ['24:20'],
		rs1: ['19:15'],
		rd: ['11:7']
	},
	sext: true,
	exec: {
		$: ''
	},
	meta: {
		encoding: 'R',
		importance: NaN
	}
}
