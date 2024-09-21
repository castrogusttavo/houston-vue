
<template>
  <Icon :iconName="'hand-beater'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandBeaterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-beater'
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
