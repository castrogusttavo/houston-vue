
<template>
  <Icon :iconName="'skull'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SkullIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'skull'
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
