
<template>
  <Icon :iconName="'blood-bag'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BloodBagIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blood-bag'
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
