
<template>
  <Icon :iconName="'the-prophets-mosque'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TheProphetsMosqueIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'the-prophets-mosque'
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
