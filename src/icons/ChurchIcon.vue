
<template>
  <Icon :iconName="'church'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChurchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'church'
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
