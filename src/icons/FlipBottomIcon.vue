
<template>
  <Icon :iconName="'flip-bottom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlipBottomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flip-bottom'
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
