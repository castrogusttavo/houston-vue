
<template>
  <Icon :iconName="'2nd-bracket-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecondBrecketSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '2nd-bracket-square'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
