
<template>
  <Icon :iconName="'agreement-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Agreement03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'agreement-03'
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
