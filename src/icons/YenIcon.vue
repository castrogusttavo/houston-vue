
<template>
  <Icon :iconName="'yen'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'YenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'yen'
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
