
<template>
  <Icon :iconName="'new-office'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NewOfficeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'new-office'
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
