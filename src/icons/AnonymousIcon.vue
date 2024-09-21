
<template>
  <Icon :iconName="'anonymous'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AnonymousIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'anonymous'
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
