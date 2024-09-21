
<template>
  <Icon :iconName="'chess-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Chess02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chess-02'
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
