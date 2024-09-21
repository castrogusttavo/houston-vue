
<template>
  <Icon :iconName="'add-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AddCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'add-circle'
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
