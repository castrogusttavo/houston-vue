
<template>
  <Icon :iconName="'circle-arrow-up-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowUpDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-up-double'
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
