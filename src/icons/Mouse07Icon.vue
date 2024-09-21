
<template>
  <Icon :iconName="'mouse-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-07'
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
