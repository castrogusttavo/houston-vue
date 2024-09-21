
<template>
  <Icon :iconName="'encrypt'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EncryptIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'encrypt'
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
