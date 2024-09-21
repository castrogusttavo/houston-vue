
<template>
  <Icon :iconName="'sun-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sun03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sun-03'
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
