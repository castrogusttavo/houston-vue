
<template>
  <Icon :iconName="'money-not-found-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneyNotFound04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-not-found-04'
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
