
<template>
  <Icon :iconName="'avocado'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AvocadoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'avocado'
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
