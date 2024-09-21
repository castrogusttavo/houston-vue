
<template>
  <Icon :iconName="'bathtub-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bathtub02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bathtub-02'
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
