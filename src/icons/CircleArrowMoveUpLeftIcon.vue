
<template>
  <Icon :iconName="'circle-arrow-move-up-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowMoveUpLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-move-up-left'
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
