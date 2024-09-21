
<template>
  <Icon :iconName="'layout-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Layout07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-07'
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
