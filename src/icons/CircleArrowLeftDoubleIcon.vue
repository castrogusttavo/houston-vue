
<template>
  <Icon :iconName="'circle-arrow-left-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowLeftDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-left-double'
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
