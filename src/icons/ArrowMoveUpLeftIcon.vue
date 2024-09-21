
<template>
  <Icon :iconName="'arrow-move-up-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowMoveUpLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-move-up-left'
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
