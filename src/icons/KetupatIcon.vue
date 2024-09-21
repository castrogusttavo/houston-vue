
<template>
  <Icon :iconName="'ketupat'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KetupatIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ketupat'
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
