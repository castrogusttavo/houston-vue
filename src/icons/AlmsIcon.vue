
<template>
  <Icon :iconName="'alms'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlmsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alms'
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
