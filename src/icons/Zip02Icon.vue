
<template>
  <Icon :iconName="'zip-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Zip02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'zip-02'
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
