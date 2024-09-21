
<template>
  <Icon :iconName="'user-shield-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserShield01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-shield-01'
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
