
<template>
  <Icon :iconName="'unlink-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Unlink05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'unlink-05'
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
