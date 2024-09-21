
<template>
  <Icon :iconName="'sword-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sword03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sword-03'
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
