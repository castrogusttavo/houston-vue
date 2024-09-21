
<template>
  <Icon :iconName="'passport-valid'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PassportValidIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'passport-valid'
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
