
<template>
  <Icon :iconName="'view'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ViewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'view'
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
