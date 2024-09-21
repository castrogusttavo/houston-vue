
<template>
  <Icon :iconName="'identification'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IdentificationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'identification'
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
