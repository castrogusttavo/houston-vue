
<template>
  <Icon :iconName="'phone-off-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PhoneOff01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'phone-off-01'
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
