
<template>
  <Icon :iconName="'clapping-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Clapping02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'clapping-02'
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
