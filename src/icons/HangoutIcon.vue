
<template>
  <Icon :iconName="'hangout'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HangoutIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hangout'
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
