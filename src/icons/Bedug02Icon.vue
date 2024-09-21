
<template>
  <Icon :iconName="'bedug-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bedug02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bedug-02'
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
