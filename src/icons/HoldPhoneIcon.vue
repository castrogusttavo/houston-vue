
<template>
  <Icon :iconName="'hold-phone'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HoldPhoneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hold-phone'
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
