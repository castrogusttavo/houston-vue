
<template>
  <Icon :iconName="'vynil-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Vynil03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vynil-03'
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
