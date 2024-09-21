
<template>
  <Icon :iconName="'circle-arrow-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-horizontal'
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
