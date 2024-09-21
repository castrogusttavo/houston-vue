
<template>
  <Icon :iconName="'brain-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Brain02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'brain-02'
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
